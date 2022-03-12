class HelloController {
    async index(req, res) {
        return res.json({ hi: "gay"});
    }
}

export default new HelloController();