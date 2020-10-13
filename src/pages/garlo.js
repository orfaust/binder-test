import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Button from "../components/Button"

export default function(props) {
	return (
		<Layout>
			<SEO title="Garlo's page" />
			<p>
				<Link to="/">Go back to the homepage</Link>
			</p>
		</Layout>
	)
}
