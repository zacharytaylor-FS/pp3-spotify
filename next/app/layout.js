export default function RootLayout({
    // This will be used to show nested layouts or pages
    children,
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
export const metadata = {
    title: 'Home',
    description: 'Welcome to Next.JS',
}