'use strict'

const Account = require('./account.model')
<<<<<<< HEAD
<<<<<<< HEAD
const { validateData } = require('../utils/validate')
=======
const { validateData, encrypt , checkPassword } = require('../utils/validate')
>>>>>>> malvarez2018477
=======
const { validateData, encrypt , checkPassword } = require('../utils/validate')
>>>>>>> ctomas2021215

exports.addAccount = async (req, res) => {
    try {
        let data = req.body;
        let params = {
            dpi: data.dpi,
            name: data.name,
            surname: data.surname,
            phone: data.phone
        }
        let validate = validateData(params);
        if (validate) return res.status(404).send(validate);
        // save
        let account = new Account(data);
        await account.save();
        return res.send({ message: 'Account created sucessfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error Creating Account', error: err.message })
    }
}

exports.updateAccount = async (req, res) => {
    try {
        let accountId = req.params.id;
        let data = req.body;
        if (data.dpi || Object.entries(data).length === 0) return res.status(400).send({ message: 'Have submitted some data that cannot be updated' });
        let accountUpdate = await Account.findOneAndUpdate(
            { _id: req.params.id },
            data,
            { new: true }
        )
        if (!accountUpdate) return res.status(404).send({ message: 'User not found adn not updated' });
        return res.send({ message: 'Account updated', accountUpdate })
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error not updated account' });
    }
}

exports.deleteAccount = async (req, res) => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
        let accountId = req.params.id;
        let accountDeleted = await Account.findOneAndDelete({ _id: accountId });
=======
       
        let accountDeleted = await Account.findOneAndDelete({ id: req.account });
>>>>>>> malvarez2018477
=======
       
        let accountDeleted = await Account.findOneAndDelete({ id: req.account });
>>>>>>> ctomas2021215
        if (!accountDeleted) return res.send({ message: 'Account not found and not deleted' });
        return res.send({ message: `Account with username ${accountDeleted.name} deleted sucessfully` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error not deleted' });
    }
}

exports.getAccounts = async (req, res) => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
        let accounts = await Account.find()
        return res.send({ message: 'Accounts found', accounts })
=======
        let account = await Account.find().populate();
        return res.send({account})
>>>>>>> malvarez2018477
=======
        let account = await Account.find().populate();
        return res.send({account})
>>>>>>> ctomas2021215
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error getting Accounts' });
    }
}



