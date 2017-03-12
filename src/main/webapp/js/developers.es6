(function() {

    function getLinkToUrl(url, name) {
        return `<a href="https://github.com/${username}" target="_blank" rel="noopener noreferrer">${name}</a>`;
    }

    $.getJSON(`${window.location.origin}/js/developers.json`, function(data) {

        $.each(data.contributors, function(i, contributor) {
            const $div = contributor.multiple ? $('#contributors-multiple') : $('#contributors-single');
            $div.append(
                `<li>
                    ${contributor.username ? getGitHubLink(contributor.username, contributor.name) : contributor.name}
                </li>`
            );
        });

        $.each(data.committers, function(i, committer) {
            const $div = committer.endPeriod ? $('#committers-past') : $('#committers-current');
            $div.append(
                `<li>
                    ${getGitHubLink(committer.username, committer.name)}
                    (${committer.startPeriod} - ${(committer.endPeriod ? committer.endPeriod : '')})
                </li>`
            );
        });

    });

})();
