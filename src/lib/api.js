import { useSanityClient } from "astro-sanity";

export async function getAllPosts() {
  const query = `
  *[_type == 'post']{
    "categoryData": categories[]->
      {slug, title}, 
    "formatData": format->
      {slug, title}, 
    "locationData": location[]->
      {slug, title}, 
    "authorData": author->
      {name, image, bio, twitter, facebook, blog}, ...} 
    | order(publishedAt desc)`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAllCategoriesWithPosts() {
  const query = `*[_type == 'category']{"posts": *[_type == "post" && references(^._id)]{"formatData": format->
  {slug},...} | order(publishedAt desc), ...}`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAllLocationsWithPosts() {
  const query = `*[_type == 'location']{"posts": *[_type == "post" && references(^._id)]{"formatData": format->
  {slug},...} | order(publishedAt desc), ...}`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAllFormatsWithPosts() {
  const query = `*[_type == 'format']{"posts": *[_type == "post" && references(^._id)]{"formatData": format->
  {slug},...} | order(publishedAt desc), ...}`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getNextEvent() {
  const query = `*[_type == 'agenda'] | order(eventDate asc)[0]{title, eventDate, endDate}`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAllEvents() {
  const query = `
  *[_type == 'agenda'] | order(eventDate asc)`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAllCategories() {
  const query = `*[_type == 'category']`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAllLocations() {
  const query = `*[_type == 'location'] | order(order asc)`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAllFormats() {
  const query = `*[_type == 'format'] | order(order asc)`;
  const data = await useSanityClient().fetch(query);
  return data;
}