import {EPICSComponent} from '../EPICSComponent.js';
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

describe('EPICSComponent' , function() {
    it('should have a receiveUpdate function', function(){
        var EPComp = new EPICSComponent({});
        expect(EPComp.receiveUpdate).to.be.a('function');

    });

    it('Should start with a null EPICSValue state', function(){
        var EPComp = new EPICSComponent({});
        expect(EPComp.state.EPICSValue).to.be.null;
    });

    it('Should be able to receive a response and update state accordingly', function(){
        var EPComp = shallow(<EPICSComponent/>);
        EPComp.instance().receiveUpdate(4);
        expect(EPComp.instance().state.EPICSValue).to.equal(4);
    });
});
