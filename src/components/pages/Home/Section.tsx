import { type IPageSectionProps, PageSection } from '@/components/feature'

export const Section = ({ children, className, contentClassName }: IPageSectionProps) => {
  return (
    <PageSection className={className} contentClassName={contentClassName}>
      {children}
    </PageSection>
  )
}
