export const notFound = (req, res) => {
    res.status(404).render('error', {
        message: 'Nie znaleziono strony'
    })
}