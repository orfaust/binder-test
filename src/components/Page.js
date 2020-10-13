import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Button from "../components/Button"

export default function(props) {
	const page = props.pageContext.page

	return (
		<Layout>
			<SEO title={page.html_title} />
			<h1>
				<a href="#" onClick={logData.bind(page)}>
					{page.titolo}
				</a>
			</h1>

			{page.sezioni.map((sezione) => (
				<Section key={sezione.ID} section={sezione}></Section>
			))}

			<p>
				<Link to="/">Go back to the homepage</Link>
			</p>
		</Layout>
	)
}

function Section({section}) {
	return (
		<section>
			<h2>
				<a href="#" onClick={logData.bind(section)}>
					{section.titolo}
				</a>
			</h2>
		</section>
	)
}

function logData(e) {
	e.preventDefault();
	console.log(this)
}
