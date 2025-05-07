import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://gdzsktbirjscwzbgglnj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkenNrdGJpcmpzY3d6YmdnbG5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MTU2MjYsImV4cCI6MjA2MjE5MTYyNn0.83nnGPIdbLRgmtZLLtopMbWHEkbMVdr3Xj8ghEXPBAM"
);

export default function mediaUpload(file) {
    const promise = new Promise((resolve, reject) => {
        if(file == null) {
            reject("No file selected")
        }
        const timeStamp = new Date().getTime()
        const newFileName = timeStamp + file.name

        supabase.storage.from('images').upload(newFileName, file , {
            cacheControl: '3600',
            upsert: false
        }).then(
            () => {
                const url = supabase.storage.from('images').getPublicUrl(newFileName).data.publicUrl
                resolve(url)
            }
        ).catch(
            (error) => {
                console.log(error)
                reject("File upload failed")
            }
        )
    })
    return promise
}

