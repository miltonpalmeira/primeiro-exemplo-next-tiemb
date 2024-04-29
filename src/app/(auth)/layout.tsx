import style from './layout.module.css';

export default function AuthLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <div className={style.container}>
            <h1>Área de LOGIN</h1>
            <hr />
            <div>
                {children}
            </div>
        </div>
    )
}