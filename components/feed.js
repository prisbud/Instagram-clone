import Stories from "./stories";
import Posts from "./posts";
import MiniProfile from './MiniProfile'
import Suggestion from './Suggestions'
import {signOut, useSession} from "next-auth/react"

function Feed(){
    const {data:session} = useSession();

    return(
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:mx-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
       <section className="col-span-2">
           {/*Stories*/}
           <Stories />
          
           {/* Posts */}
           <Posts />
       </section>
       {session && (<section className="col-span-1 hidden xl:inline-grid md:col-span-1">
           <div className="fixed">
           {/** mini profile */}
           <MiniProfile />
           {/** Suggestions */}
           <Suggestion />
           </div>
       </section>)} 
       
       </main>
    )
}

export default Feed