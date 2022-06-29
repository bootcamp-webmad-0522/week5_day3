const router = require("express").Router()

const characersService = require('./../services/characters.service')


router.get("/", (req, res, next) => {
  res.render("index");
});



// all characters
router.get('/movie-characters/list', (req, res) => {

  characersService
    .getAllCharacters()
    .then(response => res.render('pages/characters-list', { characters: response.data }))
    .catch(err => console.log(err))
})



// New character form (render)
router.get('/movie-characters/create', (req, res) => {
  res.render('pages/new-character-form')
})


// New character form (handler)
router.post('/movie-characters/create', (req, res) => {

  const { name, weapon, occupation } = req.body

  const characterData = { name, weapon, occupation }

  characersService
    .saveCharacter(characterData)
    .then(response => res.redirect('/movie-characters/list'))
    .catch(err => console.log(err))
})




// Edit character form (render)
router.get('/movie-characters/edit/:character_id', (req, res) => {

  characersService
    .getOneCharacter(req.params.character_id)
    .then(response => {
      const character = response.data
      res.render('pages/edit-character-form', character)
    })
    .catch(err => console.log(err))
})


// Edit character form (handler)
router.post('/movie-characters/edit/:character_id', (req, res) => {

  const { character_id } = req.params
  const newCharacterData = req.body

  characersService
    .editCharacter(character_id, newCharacterData)
    .then(response => res.redirect('/movie-characters/list'))
    .catch(err => console.log(err))
})





// Delete character
router.get('/movie-characters/delete/:character_id', (req, res) => {

  const { character_id } = req.params

  characersService
    .deleteCharacter(character_id)
    .then(response => res.redirect('/movie-characters/list'))
    .catch(err => console.log(err))
})



module.exports = router