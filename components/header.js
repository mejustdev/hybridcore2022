import Link from 'next/link'
import useSite from '../lib/hooks/use-site';


export default function Header() {

  const  data  = useSite();
  const navItem = data.menus[0].menuItems

  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        {/* TODO: Find better solution for home page add external url's handler*/}
        <ul>
          {navItem?.map(({link}) => (
            <li key={link._id}>

              <Link as={`/`} href="/">
                <a className="hover:underline">{link.title}</a>
              </Link>

            </li> ))
          }
        </ul>
    </h2>
  )
}
