import LayoutContainer from '@/components/common/LayoutContainer'
import Carousel from '@/components/common/Caroussel'

export default function Histoire() {
  return (
    <>
      <section data-scroll-section className='mt-[var(--header-height)] '>
        <Carousel
          images={[
            '/assets/femme-vetements.webp',
            '/assets/femme-fleurs.webp',
            '/assets/chapeaux.webp',
          ]}
        />
      </section>
      <LayoutContainer marginTop="mt-[var(--header-height)]">
        <h1>Notre Histoire</h1>
        <p>Voici l&apos;histoire de notre entreprise...</p>
      </LayoutContainer>
    </>
  )
}
