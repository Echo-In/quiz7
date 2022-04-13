const { History, User, sequelize } = require("../models");
const { Op } = require('sequelize');


module.exports = {
  read: async (req, res) => {
    const userhistory = await User.findAll(
      {
          include: [
          {
            model: History,
            required: false, // do not generate INNER JOIN
            attributes: ["id","name","date","arrive","leave","createdAt","updatedAt"] 
            
          }],
          attributes: ["id","name","group","email"],
      });
    res.render("userhistory", {userhistory});
    // res.status(201).json(userhistory);
  },

  create: async (req, res) => {
    res.render("userhistory/create");
    // res.status(201).json({test:"success"});
  },

  post: async(req, res) => {
    const username = await User.findOne({
      where: {
          id: req.body.UserId,
      }
    });
    await History.create(
        {
            name: username.name,
            date: req.body.date,
            arrive: req.body.arrive,
            leave: req.body.leave,
            UserId: req.body.UserId,
        }
    );
    res.redirect("/user");
    // res.status(201).json({result:"success"});
  },
  
  edit: async(req, res) => {
    const userhistory = await User.findOne(
      {
          include: [
          {
            model: History,
            required: false, // do not generate INNER JOIN
            attributes: ["name","date","arrive","leave","createdAt","updatedAt"] 
            
          }],
          attributes: ["id","name","group","email"],
          where: {
            id: req.params.id
          }
      });
    res.render("user/update",{userhistory: userhistory})
    // res.status(201).json(userhistory);
  },

  update: async(req, res) => {
    await History.update({
        //name: req.body.name,
        date: req.body.group,
        arrive: req.body.arrive,
        leave: req.body.leave,
      }, {
        where: {
          id: req.body.id,
        },
      });
    
    res.redirect("/user");
    // res.status(201).json({test:"success"});
  },

  leave: async(req, res) => {
    await History.update({
        //name: req.body.name,
        leave: req.body.leave,
      }, {
        where: {
          id: req.body.id,
          leave: null,
        },
      });
    res.redirect("/user");
    // res.status(201).json({test:"success"});
  },

  arrive: async(req, res) => {
    await History.post({
        //name: req.body.name,
        date: req.body.group,
        arrive: req.body.arrive,
        UserId: req.body.userid,
      }, {
        where: {
          id: req.body.id,
        },
      });
    
    res.redirect("/user");
    // res.status(201).json({test:"success"});
  },

  delete: async(req, res) => {
    await History.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("user");
    // res.status(201).json({test:"success"});
  },

};

