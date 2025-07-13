import { Metadata } from 'next';
import 'material-icons/iconfont/material-icons.css';

export const metadata: Metadata = {
    title: 'Dệt may Minh Minh Tâm',
    description: 'Dệt may Minh Minh Tâm - Trang web chính thức',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
