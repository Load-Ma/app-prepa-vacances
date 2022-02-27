import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers,
} from 'react-native-popup-menu';

import BellOff from "../../assets/icons/bell-off.svg";

const { ContextMenu, SlideInMenu, Popover } = renderers;

export default function GroupCardPopup(props) {
    return (
        <Menu renderer={Popover} rendererProps={{ placement: "auto", preferredPlacement: 'right' }}>
            <MenuTrigger>{props.children}</MenuTrigger>
            <MenuOptions customStyles={{
                optionsContainer: {
                    borderRadius: 15,
                    shadowColor: "rgba(0,0,0,0.5)",
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    elevation: 5,
                },
                optionWrapper: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'left',
                    paddingTop: 8,
                    paddingRight: 15,
                    paddingBottom: 8,
                    paddingLeft: 15,
                    borderBottomWidth: 1,
                    borderBottomColor: '#C4C4C4',
                },
                optionTouchable: {
                    underlayColor: '#e0e0e0',
                    activeOpacity: 50,
                },
                optionText: {
                    color: "#000",
                },
            }}>
                <MenuOption text='Context Menu'/>
                <MenuOption text='Slide-in Menu'/>
                <MenuOption text='Popover'/>
                <MenuOption disabled={true} customStyles={{
                    optionWrapper: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'left',
                        paddingTop: 8,
                        paddingRight: 15,
                        paddingBottom: 8,
                        paddingLeft: 15,
                        borderBottomWidth: 1,
                        borderBottomColor: '#ff0000',
                    }
                }}>
                    <BellOff height={20} width={20} color={"#000"}/>
                    <Text style={{color: '#ccc'}}>Three (disabled)</Text>
                </MenuOption>
                <MenuOption text='Four (custom)' customStyles={{
                    optionWrapper: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'left',
                        paddingTop: 8,
                        paddingRight: 15,
                        paddingBottom: 8,
                        paddingLeft: 15,
                        borderBottom: 'none',
                    }
                }}/>
            </MenuOptions>
        </Menu>
    )
}
