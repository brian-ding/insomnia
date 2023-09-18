import React from "react";
import { GitRepository } from "../../../../models/git-repository";

interface Props {
    uri: string;
    onSubmit: (args: Partial<GitRepository>) => void;
}

export const GitHubEnterpriseRepositorySettingsFormGroup = (props: Props) => {
    return (
        <form
            id='github-enterprise'
            className='form-group'>
            <div className='form-control form-control--outlined'>
                <label>
                    GitHub Enterprise URI (https)
                    <input
                        type='url'
                        value='123' />
                </label>

            </div>

        </form>
    );
}
