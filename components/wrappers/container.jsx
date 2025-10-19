export default function Container({ children, parentclassName = "", childclassName = "" }) {
    return (
        <main className={`grid place-items-center ${parentclassName}`}>
            <div className={`wrapper ${childclassName}`}>
                {children}
            </div>
        </main>
    )
}
