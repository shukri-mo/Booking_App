import supabase, { supabaseUrl } from "./supabase";
export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }

  return data;
}
export async function createEditCabin(newCabin, id) {
  console.log(newCabin, id);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // 1.Create Cabin it self

  // https://xvootuatqqeaisidqjhn.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg
  let query = supabase.from("cabins");
  //1.Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //2. Edit

  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();

  // const { data, error } = await query
  //   .insert([{...newCabin,image:imagePath}])
  //   .select().single();
  if (error) {
    console.error(error);
    throw new Error("cabins could not be created");
  }
  // 2.Upload image if cubin is succeful
if(hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  //3. Delete the cabin if there was an error uploading the img//

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);

    console.error(storageError);
    throw new Error(
      "cabin image could not be uploaded and cabin could not be created "
    );
  }
  return data;
}

// Step 1: Upload image to Supabase Storage

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("cabins could not be deleted");
  }

  return data;
}
