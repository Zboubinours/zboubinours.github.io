import React from 'react';

const Lorem = ({size}) => {
  const lorem = (
    <p>
      Officia illum laborum constias, fabulas ne aute, eiusmod esse nam litteris arbitrantur, eram fabulas ad exercitation,
      iudicem te incurreret, legam consequat eruditionem ut constias e amet e sed quo nulla veniam sint. Incurreret enim nam
      constias firmissimum nam litteris legam amet qui quem, dolore hic expetendis e dolore id fore familiaritatem nostrud
      amet senserit, pariatur arbitrantur de admodum, labore quamquam est fidelissimae in anim incididunt non consectetur in
      sed legam aut cillum. Tempor est ex veniam laboris se laboris summis eram voluptate duis se duis e est quem vidisse a
      sint iis vidisse ne aliqua, magna laborum relinqueret, mandaremus quae ex nescius tractavissent te ea noster eu veniam,
      quibusdam malis tamen hic cillum. Quorum appellat praesentibus ab magna appellat eu ipsum veniam a aut veniam incididunt
      fidelissimae qui export mentitum officia, nulla possumus sed coniunctione, non fore noster quo proident, duis
      graviterque possumus summis expetendis ne se malis legam veniam expetendis.Quibusdam enim enim ut culpa. Eu magna
      illustriora. Nulla cupidatat imitarentur, aut malis quem esse iudicem a an esse constias quo enim do aliquip ita tamen,
      eu elit relinqueret, ea ita legam cupidatat ne iudicem summis de possumus cohaerescant, culpa ut proident. Aliquip
      summis admodum vidisse, ubi aut quorum aliqua elit, a multos fore quorum officia, hic duis eiusmod laboris quo quibusdam
      ab eiusmod sed ingeniis quid nescius occaecat sed culpa sed laborum, sint graviterque aliquip nulla incididunt.
    </p>
  )

  let lorems = Array(parseInt(size))
  lorems.fill(lorem)

  const paragraphs = lorems.map((elt, idx) => React.cloneElement(elt, {key: idx}))

  return (<div class="row">
    <div class="col-lg-12">
      {paragraphs}
    </div>
  </div>)
}

export default Lorem
