import Footer from './components/Footer'
import Header from './components/Header'

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="h-[calc(100vh-100px)] md:h-[calc(100vh-140px)] flex justify-center items-center">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default HomeLayout
