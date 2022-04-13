const { User } = require("../models");



module.exports = {

    read: async(_, res) => {
      const newuser = await User.findAll({
        order: [["name","ASC"]],
      });

      res.render("user", {newuser})
    //   res.status(201).json(newuser);
    },
    
    create: async(_, res) => {
        res.render("user/create")
        // res.status(201).json({test:"success"});
    },
  
    post: async(req, res) => {
        await User.create(
            {
                name: req.body.name,
                group: req.body.group,
                email: req.body.email,
            }
        );
        res.redirect("/user");
        // res.status(201).json({result:"success create"});
    },

    edit: async(req, res) => {
        const existinguser = await User.findOne({
            where: {
                id: +req.params.id,
            }
        });
        res.render("user/update", existinguser);
        // res.status(202).json(existinguser);
    },

    update: async(req, res) => {
        await User.update({
            name: req.body.name,
            group: req.body.group,
            email: req.body.email,
            }, {
            where: {
                id: req.body.id,
            },
        });
        // res.status(201).json({result: "success"});
        res.redirect("/user");
        
    },

    delete: async(req, res) => {
        await User.destroy({
            where: {
              id: req.params.id,
            }
        });
        //res.redirect("/user");
        res.status(204).json({result: "success"});
    },


};
