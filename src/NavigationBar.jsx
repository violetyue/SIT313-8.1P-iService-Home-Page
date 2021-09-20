import React from "react";
import { Button, Menu } from "semantic-ui-react"

function NavigationBar() {
    return (
        <Menu color='grey' inverted widths={6}>
        <Menu.Item
          name='IService'
          active='true'
        />
        <Menu.Item
          name='Post a task'
        />
        <Menu.Item
          name='Become an expert'
        />
        <Menu.Item
          name='Find tasks'
        />
        <Menu.Item
          name='How it works'
        />
        <Menu.Item>
          <Button primary>Sign In</Button>
        </Menu.Item>

      </Menu>
    )
}

export default NavigationBar