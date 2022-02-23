export const notFound = (req,res)=>{
    res.status(404).render({
        message: 'Not found'
    })
}