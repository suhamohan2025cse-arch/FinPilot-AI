import {
  TrendingDown,
  LineChart,
  ScanSearch,
  MessagesSquare,
  Lightbulb,
  BarChart3,
} from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import FeatureCard from './FeatureCard.jsx'

const features = [
  {
    icon: TrendingDown,
    title: 'Fee Risk Prediction',
    description:
      'Identify which families are likely to miss upcoming fee payments weeks in advance, so your team can act before a due date passes.',
  },
  {
    icon: LineChart,
    title: 'Budget Forecasting',
    description:
      "Project next term's income and spend from historical patterns, so leadership walks into planning season with numbers they can trust.",
  },
  {
    icon: ScanSearch,
    title: 'Expense Anomaly Detection',
    description:
      "Catch duplicate invoices, unusual vendor charges, and out-of-pattern transactions the moment they're recorded, not at year-end audit.",
  },
  {
    icon: MessagesSquare,
    title: 'AI Finance Copilot',
    description:
      'Ask questions in plain English — "which department is over budget?" — and get grounded answers pulled straight from your ledgers.',
  },
  {
    icon: Lightbulb,
    title: 'Explainable AI',
    description:
      'Every prediction ships with the reasoning behind it: contributing factors, confidence score, and the data points that drove the call.',
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description:
      'Live dashboards built for administrators, not analysts — fee collection, department spend, and enrollment-linked revenue in one view.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="section-padding">
        <SectionHeading
          eyebrow="Platform"
          title="Every financial decision, backed by a model"
          description="Six capabilities that replace spreadsheet guesswork with predictions your team can defend to a school board."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} index={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
