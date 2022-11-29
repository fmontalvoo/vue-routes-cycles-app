const canAccess = () => {
    return new Promise((resolve, reject) => {
        const r = Math.random()
        setTimeout(() => {
            if (r > 0.9)
                resolve(false)
            else
                resolve(true)
        }, 1000)
    })
}

export const authGuard = async (to, from, next) => {
    console.info({ to, from, next })
    const authorized = await canAccess()
    if (authorized)
        next()
    else
        next({ name: 'error-404' })
}