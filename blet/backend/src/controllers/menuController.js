const Menu = require("./../models/menuModel")


const getAllData = async (req, res) => {

  try {
    const menu = await Menu.find()
    res.status(200).send(menu)
  } catch (error) {
    res.status(500).send(error)
  }

}


const postData = async (req, res) => {

  try {
    const obj = req.body
    const newMenu = new Menu(obj)
    newMenu.save()
    res.status(200).send(newMenu)
  } catch (error) {
    res.status(400).send(error)
  }

}

const getDataById = async (req, res) => {

  try {
    const menu =await Menu.findById(req.params.id)
    if(!menu){
      res.status(404).send(error)
    }
    res.status(200).send(menu)
  } catch (error) {
    res.status(500).send(error)
  }

}

const deleteDataById = async (req, res) => {

  try {
    const menu =await Menu.findByIdAndDelete(req.params.id)
    if(!menu){
      res.status(404).send(error)
    }
    res.status(200).send(menu)
  } catch (error) {
    res.status(500).send(error)
  }

}


const patchDataById = async (req, res) => {

  try {
    const menu =await Menu.findByIdAndUpdate(req.params.id, req.body)
    if(!menu){
      res.status(404).send(error)
    }
    res.status(200).send(menu)
  } catch (error) {
    res.status(400).send(error)
  }

}

const putDataById = async (req, res) => {

  try {
    const menu =await Menu.findOneAndReplace({_id:req.params.id}, req.body)
    if(!menu){
      res.status(404).send(error)
    }
    res.status(200).send(menu)
  } catch (error) {
    res.status(400).send(error)
  }

}

module.exports = { getAllData, postData, getDataById,deleteDataById, patchDataById,putDataById }