"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const generate = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        alert(result.message)
        console.log(result)

      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="mx-auto max-w-lg bg-gradient-to-br from-purple-50 to-purple-200 my-16 p-8 rounded-lg shadow-lg flex flex-col gap-6 min-h-screen">
      <h1 className="font-bold text-3xl text-purple-800 text-center">
        Generate Your Short URLs
      </h1>
      <div className="flex flex-col gap-6">
        <input
          type="text"
          className="px-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          value={url}
          placeholder="Enter your URL"
          onChange={(e) => {
            seturl(e.target.value)
          }}
        />

        <input
          type="text"
          className="px-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          value={shorturl}
          placeholder="Enter your preferred short URL text"
          onChange={(e) => {
            setshorturl(e.target.value)
          }}
        />

        <button
          onClick={generate}
          className="bg-purple-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-700 transition-transform transform hover:scale-105"
        >
          Generate
        </button>
      </div>
      {generated && (
        <div className="mt-6 p-4 bg-purple-100 border border-purple-300 rounded-lg">
          <span className="font-bold text-purple-800 text-lg">Your link:</span>
          <code className="block text-purple-700 mt-2 break-words">
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
        </div>
      )}
    </div>
  )

}

export default generate