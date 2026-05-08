let posts = [];

export default {
    async create(req, res, next) {
        try {
            const post = {
                id: Date.now(),
                title: req.body.title,
            };

            posts.push(post);

            res.json(post);
        } catch (e) {
            next(e);
        }
    },
    async getAll(req, res, next) {
        try {
            res.json(posts);
        } catch (e) {
            next(e);
        }
    },
    async update(req,res,next) {
        try {
            const {id}= req.body;
            const post = posts.find(p => p.id === id);
            if (!post) {
                return res.status(404).json({error:"not found"});
            }
        }catch (e){
         next(e);
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.body;
            posts = posts.filter(p => p.id != id);
            res.json({ message: "Deleted" });
        } catch (e) {
            next(e);
        }
    }
}