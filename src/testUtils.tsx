import { ReactWrapper } from "enzyme"
import { axe } from "jest-axe"




export const aXify = ( wrapper: ReactWrapper ) => axe( wrapper.html() )

export const isAxeValid = async ( wrapper: ReactWrapper ) => {
	expect( await aXify( wrapper ) ).toHaveNoViolations()
}

