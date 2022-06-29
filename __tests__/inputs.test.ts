import {expect, jest} from '@jest/globals'
import * as inputs from '../src/actions/inputs'
import * as core from '@actions/core'

describe('Validate Inputs', () => {
    it('tests validateInputs with process.exit for actiondisabled', async () => {
        const mockExit = jest
            .spyOn(process, 'exit')
            .mockImplementation(number => {
                throw new Error('process.exit: ' + number)
            })
        expect(() => {
            inputs.validateInputs('', '', [], '', [], true)
        }).toThrow()
        expect(mockExit).toHaveBeenCalledWith(core.ExitCode.Success)
        mockExit.mockRestore()
    })

    it('tests validateInputs with process.exit for null test and coverage data', async () => {
        const mockExit = jest
            .spyOn(process, 'exit')
            .mockImplementation(number => {
                throw new Error('process.exit: ' + number)
            })
        expect(() => {
            inputs.validateInputs('', '', [], '', [], false)
        }).toThrow()
        expect(mockExit).toHaveBeenCalledWith(core.ExitCode.Success)
        mockExit.mockRestore()
    })

    it('tests validateInputs with process.exit for only exists test format', async () => {
        const mockExit = jest
            .spyOn(process, 'exit')
            .mockImplementation(number => {
                throw new Error('process.exit: ' + number)
            })
        expect(() => {
            inputs.validateInputs('junit', '', [], '', [], false)
        }).toThrow()
        expect(mockExit).toHaveBeenCalledWith(core.ExitCode.Success)
        mockExit.mockRestore()
    })

    it('tests validateInputs with process.exit for only exists test framework', async () => {
        const mockExit = jest
            .spyOn(process, 'exit')
            .mockImplementation(number => {
                throw new Error('process.exit: ' + number)
            })
        expect(() => {
            inputs.validateInputs('', 'pytest', [], '', [], false)
        }).toThrow()
        expect(mockExit).toHaveBeenCalledWith(core.ExitCode.Success)
        mockExit.mockRestore()
    })

    it('tests validateInputs with process.exit for only exists test format and path', async () => {
        const mockExit = jest
            .spyOn(process, 'exit')
            .mockImplementation(number => {
                throw new Error('process.exit: ' + number)
            })
        expect(() => {
            inputs.validateInputs(
                'junit',
                '',
                ['./reports/report.xml'],
                '',
                [],
                false
            )
        }).toThrow()
        expect(mockExit).toHaveBeenCalledWith(core.ExitCode.Success)
        mockExit.mockRestore()
    })

    it('tests validateInputs with process.exit for only exists test framework and path', async () => {
        const mockExit = jest
            .spyOn(process, 'exit')
            .mockImplementation(number => {
                throw new Error('process.exit: ' + number)
            })
        expect(() => {
            inputs.validateInputs(
                '',
                'pytest',
                ['./reports/report.xml'],
                '',
                [],
                false
            )
        }).not.toThrow()
        expect(mockExit).not.toBeCalledWith(core.ExitCode.Success)
        mockExit.mockRestore()
    })

    it('tests validateInputs with process.exit for only exists test path', async () => {
        const mockExit = jest
            .spyOn(process, 'exit')
            .mockImplementation(number => {
                throw new Error('process.exit: ' + number)
            })
        expect(() => {
            inputs.validateInputs(
                '',
                '',
                ['./reports/report.xml'],
                '',
                [],
                false
            )
        }).toThrow()
        expect(mockExit).toHaveBeenCalledWith(core.ExitCode.Success)
        mockExit.mockRestore()
    })

    it('tests validateInputs with process.exit for only exists coverage framework', async () => {
        const mockExit = jest
            .spyOn(process, 'exit')
            .mockImplementation(number => {
                throw new Error('process.exit: ' + number)
            })
        expect(() => {
            inputs.validateInputs('', '', [], 'jacoco', [], false)
        }).toThrow()
        expect(mockExit).toHaveBeenCalledWith(core.ExitCode.Success)
        mockExit.mockRestore()
    })

    it('tests validateInputs with process.exit for only exists coverage path', async () => {
        const mockExit = jest
            .spyOn(process, 'exit')
            .mockImplementation(number => {
                throw new Error('process.exit: ' + number)
            })
        expect(() => {
            inputs.validateInputs('', '', [], '', ['**/target/**'], false)
        }).toThrow()
        expect(mockExit).toHaveBeenCalledWith(core.ExitCode.Success)
        mockExit.mockRestore()
    })

    it('tests validateInputs without process.exit for valid test framework, format and path', async () => {
        const mockExit = jest
            .spyOn(process, 'exit')
            .mockImplementation(number => {
                throw new Error('process.exit: ' + number)
            })
        inputs.validateInputs('junit', 'pytest', ['./reports'], '', [], false)
        expect(mockExit).not.toHaveBeenCalledWith(core.ExitCode.Success)
        mockExit.mockRestore()
    })

    it('tests validateInputs without process.exit for valid coverage framework and path', async () => {
        const mockExit = jest
            .spyOn(process, 'exit')
            .mockImplementation(number => {
                throw new Error('process.exit: ' + number)
            })
        inputs.validateInputs('', '', [], 'jacoco', ['**/targets/**'], false)
        expect(mockExit).not.toHaveBeenCalledWith(core.ExitCode.Success)
        mockExit.mockRestore()
    })
})
