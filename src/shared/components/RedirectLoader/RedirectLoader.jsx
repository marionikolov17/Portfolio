import styles from "./RedirectLoader.module.css"

export default function RedirectLoader() {
    return (
        <>
            <div className="w-full min-h-screen fixed z-[60] redirect-bg flex flex-col justify-center items-center">
                <div className={styles.loader}></div>
                <h3 className="text-white font-bold text-4xl mt-10">Redirecting...</h3>
            </div>
        </>
    )
}