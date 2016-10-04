import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Session } from 'meteor/session';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.state = new ReactiveDict();
  this.state.setDefault('counter', 0);
  Session.setDefault('counter', 0);
});

Template.hello.helpers({
  counter1() {
    return Template.instance().counter.get();
  },
  counter2() {
    return Template.instance().state.get('counter');
  },
  counter3() {
    return Session.get('counter');
  },
});

Template.hello.events({
  'click .js-countup1'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
  'click .js-countup2'(event, instance) {
    // increment the counter when button is clicked
    instance.state.set('counter', instance.state.get('counter') + 1);
  },
  'click .js-countup3'(event, instance) {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  },
});
