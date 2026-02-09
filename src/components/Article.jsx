import React from 'react'

const Article = () => {
  return (
    <div className="max-w-3xl mx-auto text-2xl leading-relaxed">
      <p className="mb-4">
        I designed a Helpdesk product during my time as design director at Capacity.
      </p>

      <p className="mb-4">
        Helpdesk is a core part of the Capacity platform because support issues that cannot be resolved with automation must be escalated to a <span className="font-semibold">human</span> agent. We spent a lot of effort building personas around the helpdesk agents so we could understand their needs.
      </p>

      <p className="mb-4">
        This wasn't a time-boxed project with a clear end date. Rather, this was work that evolved over time as we released an MVP to the market, observed how customers used it, and adjusted and iterated over time. The following shows, not all, but many of the features we designed and shipped to the delight of our customers.
      </p>
    </div>
  )
}

export default Article
