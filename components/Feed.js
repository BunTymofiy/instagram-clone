import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import { useSession } from 'next-auth/react'
function Feed() {
  const { data: session } = useSession()
  return (
    <main className={`xl mx-auto grid max-w-6xl grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:grid-cols-3 ${!session && "!grid-cols-1 !max-w-3xl"}`}>
      {/* Section */}
      <section className="col-span-2">
      {session && (<Stories />)}
        <Posts />
      </section>
      {session && (
        <section className="hidden md:col-span-1 xl:inline-grid">
          <div className="fixed top-20">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  )
}

export default Feed
