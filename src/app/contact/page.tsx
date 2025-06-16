import LayoutContainer from "@/components/common/LayoutContainer";

export default function Contact() {
    return (
        <LayoutContainer marginTop="mt-[var(--header-height)]">
            <h1>Contact</h1>
            <p>Pour toute demande, veuillez nous contacter à l&apos;adresse suivante :</p>
            <a href="mailto:contact@example.com">contact@example.com</a>
        </LayoutContainer>
    );
}