import React from "react";
import { shallow } from "enzyme";
import {findByTestAttr, checkProps} from "../../../Utils"
import ListItem from ".";


describe("List item component" , () => {
    describe('Checking PropTypes', () => {
        it('Should not throw  a warning', () =>{
            const expectedProps = {
                title: "Example Title", 
                desc: "some text "
            };
            const propError = checkProps(ListItem, expectedProps);
            expect(propError).toBeUndefined();
        })
    })

    describe("Component Renders", () => {
        let wrapper;
        beforeEach(() =>{
            const props = { title: "Example Title", 
            desc: "some text "};

            wrapper = shallow(<ListItem {...props}/>);
        })

        it('should render wothour error', () =>{
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);

        });

        it('should render the title', () => {
            const title = findByTestAttr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });
        
        it('should render the desc', () => {
            const desc = findByTestAttr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        })




    })
})