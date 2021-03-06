// jshint asi:true
const bcrypt  = require('bcryptjs')
const client  = require('../database/client')
const queries = require('../database/queries')

const clearDatabase = () => {
  return deleteAllUsersSearches()
    .then(() => deleteAllSearches())
    .then(() => deleteAllUsers())
    .catch(e => {throw e})
}

const deleteAllUsers = () => {
  return client.oneOrNone(`DELETE from users;`)
}

const deleteAllSearches = () => {
  return client.oneOrNone(`DELETE from searches;`)
}

const deleteAllUsersSearches =() => {
  return client.oneOrNone(`DELETE from users_searches;`)
}

const insertUserFixtures = () =>   {
  return client.none(`
    INSERT INTO users (users_name, password) values
      ('Ben Bracamonte', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Jenna Wieden', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Homer Newark', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Tessy Colthard', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Grata Hingeley', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Elnore Ianelli', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Paulie Littlecote', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Brandie Trotman', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Sophia Simkin', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Emlynne Laxen', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Karin Lancashire', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Cam Baxill', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Locke Baillie', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Lauretta Ferby', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Margo Devorill', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Alvis Abyss', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Noella Blades', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Fitz Goodbar', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Alvinia Dumini', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Almira Beadnall', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Deloris Verissimo', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Rhodia Lindenbluth', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Katuscha Grunwall', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Stefanie Paddell', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Idaline Anker', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Katusha Lundbech', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Brita Donnell', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Henka Appleby', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Zsazsa Allred', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Haroun Birmingham', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Karyn Nelane', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Robbert Crowne', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Yurik Fidgeon', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Terrie Lisciandri', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Cassy Curphey', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Issiah Clohissy', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Laurie Shervington', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Colan Boldero', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Becky Jamot', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Forrester Spracklin', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Adorne Gaynsford', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Philly Fearney', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Clint Sirl', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Karol Nethercott', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Rustin Kiddy', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Gabriele Strother', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Julie Felder', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Shea Ascough', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Vale Morales', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Niccolo Blankman', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Sunny Cambling', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Stephanus Ortiga', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Modestia Brunsdon', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Babette Symcox', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Rachael Crowd', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Evelina Penman', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Gabbie Saywell', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Maren Shorey', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Rollie McLice', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Benji Packham', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Aylmer Buxton', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Papageno Hadrill', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Jeniffer Windaybank', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Mercy Furniss', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Bernadina Happs', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Jacquette Rennie', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Lauralee Willowby', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Ax Dahl', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Kat Francescotti', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Brenna Rapkins', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Gun Swatten', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Rowe Mingey', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Karena Wyon', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Drew Everil', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Oralie Teresi', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Alisa Barfford', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Lawry Godridge', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Clim Oguz', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Livvie Ruslen', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Felicia Warke', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Web Richardes', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Doll Mangeney', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Benito Fortnam', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Courtney Risbrough', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Mason Rhydderch', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Tremayne O''Quin', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Evania Stidston', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Jolee Scheffler', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Gina Tootin', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Jourdan Belfit', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Alisa Aldersey', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Ben Brideaux', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Rozelle Sola', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Gilemette Beeke', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Tristam Whitebrook', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Corette Persehouse', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Vanya Bentzen', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Hoyt Berthel', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Bessie Bisley', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi'),
      ('Clarance Bosdet', '$2a$10$8LQqcZRvRalqLIGC9eYmk.JA79kv4QWmpdPxro.UBNLfVvPlGCGbi');
  `)
}

const insertSearchFixtures = () =>   {
  return client.none(`
    INSERT INTO searches (search_term) values
      ('The Matrix'),
      ('The Joy Luck Club'),
      ('Godzilla'),
      ('Leaving Las Vegas'),
      ('Jurassic Park'),
      ('The Lord of the Rings'),
      ('Rambo'),
      ('Robocop'),
      ('Her'),
      ('Requiem for a Dream'),
      ('Frozen'),
      ('Dora the Explora'),
      ('Star Wars'),
      ('Bugs Bunny'),
      ('Daffy Duck'),
      ('Spiderman'),
      ('Transfomers'),
      ('Snow Piercer'),
      ('Mortal Kombat'),
      ('Mario Bros');
  `)
  .catch(e => console.error)
}

const insertUserSearchesFixtures = () =>   {
  return client.none(`
    INSERT INTO users_searches (users_id, searches_id) values
      (1, 1),
      (1, 2),
      (2, 1),
      (4, 3),
      (3, 4),
      (5, 3),
      (2, 5),
      (3, 6),
      (6, 10),
      (7, 15),
      (6, 14),
      (62, 11),
      (3, 12),
      (1, 8),
      (4, 7),
      (25, 5),
      (27, 2),
      (53, 3),
      (44, 3),
      (22, 1);
  `)
  .catch(e => console.error)
}

const resetSequences = () => {
  // sets all id series back to 1 so that we can deterministically work with ids
  return client.any('ALTER SEQUENCE "users_id_seq" RESTART WITH 1;')
    .then(() => client.any('ALTER SEQUENCE "searches_id_seq" RESTART WITH 1;'))
    .then(() => client.any('ALTER SEQUENCE "users_searches_id_seq" RESTART WITH 1;'))
    .catch(e => console.error)
}

const resetDatabase = () => {
  return clearDatabase()
    .then(resetSequences)
    .then(insertUserFixtures)
    .then(insertSearchFixtures)
    .then(insertUserSearchesFixtures)
    .catch(console.error)
}

module.exports = {
  clearDatabase,
  resetDatabase
}