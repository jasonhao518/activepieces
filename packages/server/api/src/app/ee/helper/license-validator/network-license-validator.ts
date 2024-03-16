import axios from 'axios'
import { logger } from 'server-shared'
import { LiceneseStatus, LicenseValidator } from './license-validator'
import { SystemProp, system } from 'server-shared'
export const networkLicenseValidator: LicenseValidator = {
    async validate() {
        return {
            status: LiceneseStatus.VALID,
            showPoweredBy: true,
            embeddingEnabled: true,
            gitSyncEnabled: true,
            ssoEnabled: true,
            auditLogEnabled: true,
        }
    },
}

const obtainLicense = (): string => {
    return system.getOrThrow(SystemProp.LICENSE_KEY)
}
