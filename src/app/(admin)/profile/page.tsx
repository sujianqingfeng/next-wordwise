import { fetchJsonByGet } from '@/app/utils/fetch'

export default async function Page() {
  const res = await fetchJsonByGet('/profile')
  console.log('🚀 ~ file: page.tsx:6 ~ Page ~ res:', res)

  return (
    <>
      <p>keys</p>
      <div>
        <p>volcano access key id</p>
        <input
          className="text-2 border-2 border-gray-300 rounded-md w-[400px] outline-none px-1"
          placeholder="place input volcanoAccessKeyId"
        />
      </div>
      <div>
        <p>volcano secret key</p>
        <input
          className="text-2 border-2 border-gray-300 rounded-md w-[400px] outline-none px-1"
          placeholder="place input volcanoSecretKey"
        />
      </div>

      <button className="bg-primary-color px-1 rounded-md mt-2">save</button>
    </>
  )
}
