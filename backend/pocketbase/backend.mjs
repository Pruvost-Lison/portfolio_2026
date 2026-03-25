// export async function createContact(data) {
//     return await pb.collection('Contacts').create(data);
// }

// import PocketBase from 'pocketbase';
// const pb = new PocketBase('http://127.0.0.1:8090');

// // Récupérer tous les contacts triés par nom
// export async function getAllContact() {
//     return await pb.collection('contact').getFullList({
//         sort: 'nom_contact'
//     });
// }

import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

// // Récupérer tous les films triés par date de projection
// export async function getAllFilms() {
//     return await pb.collection('Films').getFullList({
//         sort: 'date_heure_film'
//     });
// }

// // Récupérer toutes les activités triées par date
// export async function getAllActivities() {
//     return await pb.collection('Activites').getFullList({
//         sort: 'date_heure_activite'
//     });
// }

// // Récupérer tous les invités triés par ordre alphabétique
// export async function getAllGuests() {
//     return await pb.collection('Invites').getFullList({
//         sort: 'nom_invite'
//     });
// }

// // Récupérer les infos d'un film par ID
// export async function getFilmById(id) {
//     return await pb.collection('Films').getOne(id);
// }

// // Récupérer les infos d'une activité par ID
// export async function getActivityById(id) {
//     return await pb.collection('Activites').getOne(id);
// }

// // Récupérer les infos d'un invité par ID
// export async function getGuestById(id) {
//     return await pb.collection('Invites').getOne(id);
// }

// // Récupérer toutes les activités d'un animateur par ID
// export async function getActivitiesByAnimatorId(id) {
//     return await pb.collection('Activites').getFullList({
//         filter: `invite_associe.id = '${id}'`
//     });
// }

// // Récupérer toutes les activités d'un animateur par son nom
// export async function getActivitiesByAnimatorName(nom_invite) {
//     return await pb.collection('Activites').getFullList({
//         expand: 'invite_associer',
//         filter: `invite_associer.nom_invite = '${nom_invite}'`
//     });
// }

// // Ajouter ou modifier un film, une activité ou un invité
// export async function upsertItem(collection, id, data) {
//     if (id) {
//         return await pb.collection(collection).update(id, data);
//     } else {
//         return await pb.collection(collection).create(data);
//     }
// }

// // Récupérer tous les contacts triés par nom
// export async function getAllContact() {
//     return await pb.collection('contact').getFullList({
//         sort: 'nom_contact'
//     });
// }

// // Envoyer un message de contact
// export async function createContact(data) {
//     return await pb.collection('contact').create(data);
// }