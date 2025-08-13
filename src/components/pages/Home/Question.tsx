import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/feature'
import { Section } from '@/components/pages/Home/Section'
import { FREQUENTLY_ASK_QUESTION } from '@/constants'
import type { IQuestion } from '@/types'

const Question = () => {
  return (
    <Section className="bg-theme-night-100" contentClassName="flex flex-col items-start justify-center gap-y-4">
      <div className="flex flex-col items-start gap-y-2">
        <h2>Frequently Asked Questions</h2>
        <p className="text-theme-gray-400">Find answer to common question about ResuMATE</p>
      </div>

      <div className="w-full">
        <Accordion type="single" collapsible>
          {FREQUENTLY_ASK_QUESTION.map((item: IQuestion, index: number) => (
            <AccordionItem
              key={`accordion-item-${index}-${item.question}`}
              value={`accordion-item-${index}-${item.question}`}
            >
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                <p>{item.ans}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}

export default Question
