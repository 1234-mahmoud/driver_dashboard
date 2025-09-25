import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "driver_dashboard_state_v1";

const initialSeed = {
	drivers: [
		{
			id: 1,
			name: "John Smith",
			status: "available",
			vehicle: "Truck A1",
			location: "Downtown Hub",
			nextShift: "2025-09-22 08:00",
			hoursThisWeek: 32,
			rating: 4.8,
		},
		{
			id: 2,
			name: "Sarah Johnson",
			status: "on-route",
			vehicle: "Van B2",
			location: "Route 45",
			nextShift: "2025-09-22 14:00",
			hoursThisWeek: 28,
			rating: 4.9,
		},
		{
			id: 3,
			name: "Mike Wilson",
			status: "off-duty",
			vehicle: "Truck C3",
			location: "Home",
			nextShift: "2025-09-23 06:00",
			hoursThisWeek: 40,
			rating: 4.6,
		},
	],
	routes: [
		{
			id: 1,
			title: "City Center Route",
			date: "2025-09-22",
			startTime: "08:00",
			endTime: "16:00",
			from: "Downtown Hub",
			to: "City Center",
			assignedDriverId: 1,
			status: "scheduled",
		},
		{
			id: 2,
			title: "Airport Express",
			date: "2025-09-22",
			startTime: "14:00",
			endTime: "22:00",
			from: "North Station",
			to: "Airport",
			assignedDriverId: 2,
			status: "in-progress",
		},
	],
};

const SchedulerContext = createContext(null);

export const SchedulerProvider = ({ children }) => {
	const [state, setState] = useState(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			return raw ? JSON.parse(raw) : initialSeed;
		} catch (e) {
			return initialSeed;
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
		} catch (e) {}
	}, [state]);

	const addDriver = (driver) => {
		setState((prev) => {
			const nextId = prev.drivers.length ? Math.max(...prev.drivers.map((d) => d.id)) + 1 : 1;
			return {
				...prev,
				drivers: [
					...prev.drivers,
					{
						id: nextId,
						status: driver.status || "off-duty",
						nextShift: driver.nextShift || "",
						hoursThisWeek: driver.hoursThisWeek || 0,
						rating: driver.rating || 4.5,
						...driver,
					},
				],
			};
		});
	};

	const addRoute = (route) => {
		setState((prev) => {
			const nextId = prev.routes.length ? Math.max(...prev.routes.map((r) => r.id)) + 1 : 1;
			return {
				...prev,
				routes: [
					...prev.routes,
					{
						id: nextId,
						status: route.status || "scheduled",
						assignedDriverId: route.assignedDriverId || null,
						...route,
					},
				],
			};
		});
	};

	const value = useMemo(
		() => ({
			drivers: state.drivers,
			routes: state.routes,
			addDriver,
			addRoute,
		}),
		[state]
	);

	return <SchedulerContext.Provider value={value}>{children}</SchedulerContext.Provider>;
};

export const useScheduler = () => {
	const ctx = useContext(SchedulerContext);
	if (!ctx) throw new Error("useScheduler must be used within SchedulerProvider");
	return ctx;
};


