import Link from 'next/link'

export const Header = () => {
  return (
    <div className="fixed  z-20 flex h-8 w-full items-center justify-between bg-white px-16 py-8 font-semibold ">
      <div className="text-blue-600">J A Hind</div>
      <Link
        href="mailto:jane.hind@nhs.net"
        className="inline-flex items-center text-base font-medium tracking-tight text-slate-600"
      >
        <div className="spacing-[0.8rem] font-semibold ">CONTACT</div>
      </Link>
    </div>
  )
}
