// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		console.log('Hello World command executed!');
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from HelloWorld!');
	});

	const demoCommand = vscode.commands.registerCommand('helloworld.demoCommand', () => {
		console.log('Demo command executed!');

		// copy examples demo.json to user worksapce

		const workspaceFolders = vscode.workspace.workspaceFolders;
		if (workspaceFolders) {
			const workspaceFolder = workspaceFolders[0];
			const demoJsonPath = vscode.Uri.joinPath(workspaceFolder.uri, 'demo.json');
			const demoJsonContent = JSON.stringify({ message: 'Hello World! Demo generated' }, null, 2);
			vscode.workspace.fs.writeFile(demoJsonPath, Buffer.from(demoJsonContent));
		}
		// what if workspaceFolders is undefined?, to create a folder named test under the workspace folder
		else {
			vscode.window.showErrorMessage('No workspace folder found. Please open a workspace folder.');

		}



	});

	context.subscriptions.push(demoCommand);

	context.subscriptions.push(disposable);

}

// This method is called when your extension is deactivated
export function deactivate() { }
