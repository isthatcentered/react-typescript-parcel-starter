import { mount, ReactWrapper } from "enzyme"
import { Root } from "./Root"
import * as React from "react"
import { isAxeValid } from "./testUtils"




const { axe } = require( "jest-axe" )


test( `No aXe violations`, async () => {
	const wrapper: ReactWrapper = mount( <Root/> )
	
	await isAxeValid( wrapper )
} )
