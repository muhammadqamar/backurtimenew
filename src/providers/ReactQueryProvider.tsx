"use client";

import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/api/reactQueryClient";

export default function ReactQueryProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [client] = useState(queryClient);

	return (
		<QueryClientProvider client={client}>
			{children}
			{process.env.NODE_ENV === "development" && (
				<ReactQueryDevtools initialIsOpen={false} />
			)}
		</QueryClientProvider>
	);
}
