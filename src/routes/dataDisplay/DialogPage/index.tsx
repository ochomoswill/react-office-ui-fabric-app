import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogFooter, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { hiddenContentStyle, mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import * as React from 'react'
import './index.css'

const screenReaderOnly = mergeStyles(hiddenContentStyle);

export interface IDialogBasicExampleState {
    hideDialog: boolean;
}

class DialogPage extends React.Component {
    public state: IDialogBasicExampleState = {
        hideDialog: true
    };
    // Use getId() to ensure that the IDs are unique on the page.
    // (It's also okay to use plain strings without getId() and manually ensure uniqueness.)
    private labelId: string = getId('dialogLabel');
    private subTextId: string = getId('subTextLabel');

    public render() {

        return (
            <div className="container">
                <div>
                    <h1 className="Heading">Dialog</h1>
                    <div className="ContentCard">
                        <h2 className="Heading">Dialog</h2>
                        <DefaultButton secondaryText="Opens the Sample Dialog" onClick={this.showDialog} text="Open Dialog" />
                        <label id={this.labelId} className={screenReaderOnly}>
                            My sample Label
                        </label>
                        <label id={this.subTextId} className={screenReaderOnly}>
                            My Sample description
                        </label>

                        <Dialog
                            hidden={this.state.hideDialog}
                            onDismiss={this.closeDialog}
                            dialogContentProps={{
                                subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.',
                                title: 'All emails together',
                                type: DialogType.normal,
                            }}
                            modalProps={{
                                isBlocking: false,
                                styles: { main: { maxWidth: 450 } },
                                subtitleAriaId: this.subTextId,
                                titleAriaId: this.labelId,
                            }}
                        >
                            <DialogFooter>
                                <PrimaryButton onClick={this.closeDialog} text="Save" />
                                <DefaultButton onClick={this.closeDialog} text="Cancel" />
                            </DialogFooter>
                        </Dialog>
                    </div>
                </div>
            </div>
        )
    }

    private showDialog = (): void => {
        this.setState({ hideDialog: false });
    };

    private closeDialog = (): void => {
        this.setState({ hideDialog: true });
    };
}

export default DialogPage