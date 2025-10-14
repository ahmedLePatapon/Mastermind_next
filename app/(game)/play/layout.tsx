import Header from "./components/Header";

export default function GameLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className="antialiased background-dark text-foreground"
            >
                <div
                    className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden font-display">
                    <div className="layout-container flex h-full grow flex-col">
                        <div className="px-4 md:px-10 lg:px-20 flex flex-1 justify-center py-5">
                            <div className="layout-content-container flex flex-col max-w-7xl flex-1">
                                <Header />
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
